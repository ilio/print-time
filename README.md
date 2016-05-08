# print-time
Add timestamp to any program/script output

https://www.npmjs.com/package/print-time

##Install: 

    npm i print-time --save-dev
    
##Usage in console:

    echo "log" | node node_modules/print-time
 Output:

    10:11:12.345 log
    
##Usage in package.json script:

     {
       "scripts": {
          ...
          "watch:dev": "npm run build:dev -- --watch | node node_modules/print-time"
        }
      }


