pipeline {
    agent any



    stages {
        stage ('Down') {
            step {
            sh 'sudo docker compose down'
        }
        }

        stage ('Build') {
            steps {
            sh 'sudo docker build -t kartikeya532001/Demo:1.0 .'
        }
        }

        stage ('Docker_Login') {
            steps {
                withCredentials([string(credentialsId: 'dockerlogin1', variable: 'docker')]) {
                    sh 'sudo docker login -u kartikeya532001 -p ${docker}'
            }
        }

        stage ('Docker_Pus') {
            steps {
                sh 'sudo docker push kartikeya532001/Demo:1.0'
            }
        }

        stage ('UP') {
            steps {
                sh 'sudo docker compose up -d --force-recreate --no-deps --build Demo'
            }
        }
            }
}