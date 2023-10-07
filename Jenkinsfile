pipeline {
        agent {
        label 'master'
    }


    stages {
        
        stage('Setup') {
            steps {
                sh 'sudo docker-compose down'
            }
        }

        stage('Build') {
            steps {
                sh 'sudo docker build -t kartikeya532001/demo:1.0 .'
            }
        }

        stage('Login') {
            steps {
                withCredentials([string(credentialsId: 'dockerlogin1', variable: 'docker')]) {
                    sh 'sudo docker login -u kartikeya532001 -p ${docker}'
                }
            }
        }

        stage('Push') {
            steps {
                sh 'sudo docker push kartikeya532001/demo:1.0'
            }
        }

        stage('Pull') {
            steps {
                sh 'sudo docker pull kartikeya532001/demo:1.0'
            }
        }

        stage('Deploy') {
            steps {
                sh 'sudo docker-compose up -d --force-recreate --no-deps --build demo'
            }
        }
    }
}