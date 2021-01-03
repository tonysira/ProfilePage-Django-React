#!/bin/bash
start(){
    cd backend
    pip install -r requirements.txt
    nohup python manage.py runserver& &>/dev/null
    cd ..

    cd frontend
    npm install
    nohup npm run start& &>/dev/null
    cd ..
    echo "++++++++++ please wait for few seconds to fully start the program ++++++++++"
    sleep 5
}

stop(){
    kill $(lsof -i :3000 -t) &>/dev/null #kill frontend processes
    kill $(lsof -i :8000 -t) &>/dev/null #kill backend processes
}

while true; do
    
    echo '-------------------------------------------------------------'
    echo 'Select one of the options:'
    echo '    1 - start the program (front + back)'
    echo '    2 - stop (front + back)'
    echo '    3 - exit'
    echo -n 'please enter your choice:'
    read input
    echo '-------------------------------------------------------------'

    if [[ ! $input =~ ^[1-3]+$ ]] ; then
        echo "++++++++++ invalid input. Please enter between 1, 2 or 3 ++++++++++"
    fi

    if [[ $input -eq '1' ]]; then
        echo '++++++++++ starting the program ++++++++++'
        start
    fi

    if [[ $input -eq '2' ]]; then
        echo '++++++++++ stopping the program ++++++++++'
        stop
    fi

    if [[ $input -eq '3' ]]; then
        echo "++++++++++ program exited ++++++++++"
        exit
    fi

done