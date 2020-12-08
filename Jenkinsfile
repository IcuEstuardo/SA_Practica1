pipeline {
    agent any

    stages {
        stage('Build') { 
            dir('server') {
                sh 'npm install'
            }
        }
    }
}