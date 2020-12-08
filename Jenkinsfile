pipeline {
    agent any
    
    tools { nodejs "node-build" }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                dir('template') {
                    sh 'cp -R / /home/ubuntu/site-content'
                }
            }
        }
    }
}