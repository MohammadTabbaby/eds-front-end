pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'front'
        DOCKER_TAG = 'latest'
        KUBERNETES_NAMESPACE = 'default'  // Change this to your desired namespace
        KUBERNETES_DEPLOYMENT = 'front'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install dependencies and build the Angular project
                    sh 'npm install'
                    sh 'npm run build --prod'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Login to Docker Hub (use credentialsId from Jenkins credentials store)
                    withDockerRegistry([ credentialsId: 'dockerhub-credentials-id', url: '' ]) {
                        // Push Docker image to Docker Hub
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Deploy to Kubernetes
                    sh """
                    kubectl set image deployment/${KUBERNETES_DEPLOYMENT} ${KUBERNETES_DEPLOYMENT}=${DOCKER_IMAGE}:${DOCKER_TAG} -n ${KUBERNETES_NAMESPACE}
                    kubectl rollout status deployment/${KUBERNETES_DEPLOYMENT} -n ${KUBERNETES_NAMESPACE}
                    """
                }
            }
        }
    }
}
