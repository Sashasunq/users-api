pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'user-app'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Starting Docker build..."
                    sh "docker build -t ${DOCKER_IMAGE} ."
                    echo "Docker build completed."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop ${DOCKER_IMAGE} || true && docker rm ${DOCKER_IMAGE} || true"
                    sh "docker run -d --name ${DOCKER_IMAGE} -p 9090:80 ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
