pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'cnpm install'
        sh 'npm run lint'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'systemctl stop nginx.service'
        sh 'rm -rf /usr/share/nginx/html/*'
        sh 'cp -rf ./dist/* /usr/share/nginx/html'
        sh 'chmod -R -777 /usr/share/nginx/html'
        sh 'systemctl start nginx.service'
      }
    }
  }
}
