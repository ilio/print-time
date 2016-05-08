# print-time
Add timestamp to any program/script output

##Install: 

    npm i print-time --save-dev
    
##Usage in console:

    echo "log" | node print-time
 Output:

    10:11:12.345 log
    
##Usage in package.json script:

     {
       "scripts": {
          ...
          "watch:dev": "npm run build:dev -- --watch | node print-time"
        }
      }


