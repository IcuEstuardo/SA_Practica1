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
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                dir('template') {
                    sh 'cp index.html /home/ubuntu/site-content'
                    sh 'cp fun.js /home/ubuntu/site-content'
                }
            }
        }
    }
}