pipeline {
    agent {label "linux"}
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', days
ToKeepStr: '', numToKeepStr: '5')
    disableConcurrentBuilds()
    }
    stages {
        stages('Hello') {
            steps {
                echo "hello"
            }
        }
    }
}

