pipeline {
    agent {
        label 'Test'
    }
    stages {
        stage ('Build') {
            steps {
                sh 'sudo docker build -t ui .'
            }
        }
        stage ('Tag') {
            steps {
                sh 'sudo docker tag ui:latest kartikeya532001/ui:latest'
            }
        }

        stage ('Docker_Login'){
            steps {
                withCredentials([string(credentialsId: 'dockerlogin', variable: 'docker')]) {
                            sh 'sudo docker login -u kartikeya532001 -p ${docker}'
                    }
            }
        }

        stage ('Docker_Push') {
            steps {
                sh 'sudo docker push kartikeya532001/ui:latest'
            }
        }

        stage ('Down') {
            steps {
                sh 'sudo docker-compose down'
            }
        }

        stage ('UP') {
            steps {
                sh 'sudo docker-compose up -d --force-recreate --no-deps'
            }
        }
    }
}