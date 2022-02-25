pipeline {
  agent any
  stages {
    stage('Unit Test') {
      steps {
        sh 'npm run-script test'
      }
    }

    stage('Build ') {
      steps {
        sh 'npm run-script build'
      }
    }

  }
}