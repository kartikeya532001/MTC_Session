pipeline {
    agent any 

    stages  {
        stage  ('Down'){
            steps{
                sh 'sudo docker-compose down'
            }
        }

        stage ('Build') {
            steps{
                sh 'sudo docker build -t ui .'
            }
        }

        stage ('docker_login') {
            steps {
                withCredentials([string(credentialsId: 'dockerlogin', variable: 'docker')]) {
                        sh 'sudo docker login -u kartikeya532001 -p ${docker}'
            }
        }
        }

        stage ('Push') {
            steps {
                sh 'sudo docker push kartikeya532001/ui:latest'
            }
        }
        stage ('UP') {
            steps {
                sh 'sudo docker-compose up -d --force-recreate --no-deps'
            }
        }
        

    }

}