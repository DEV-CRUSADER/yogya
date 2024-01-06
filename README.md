# YOGYA

## Setting Up

### First Lets Download / Install all the required Tooling
#### Install PSQL


### Rename env/dev.sample to (.dev) and add your details.

Please install PSQL using this link
```https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/```.
This is just a reference for installation. 
Assuming the following, after installation is complete.
+ PSQL is installed
+ `Username : root`
+ `Password : root`
+ `Database Created via terminal : yogya`
- make sure that user has the permission to the database

#### Install PyCharm and/or VSCode
I personally prefer PyCharm for python, and use VSCode for React / FE Development.
Feel free to use the IDE of your choice. I find VSCode to have a lot of autoformatting plugins for FE Development very useful.
Similarly, PyCharm (intelliJ) in general has a tonne of Keyboard Shrotcuts, that make developer quality of life much better. 

#### Install Postman
+ Postman will be used for API Testing / Development.
+ We will be writing a lot of rest apis, and will add all these to Postman for better management.

#### Install Node
+ Install NVM using this linl ```https://github.com/nvm-sh/nvm```
+ Node will be used for Building React files.


### Code Setup

#### Clone Repository / Get Code
``` git clone git@github.com:DEV-CRUSADER/yogya.git```

#### Move into the codebase
``` cd yogya ```

#### Create a Python Virtual Environment
``` python -m venv venv ``` or ```python3 -m venv venv```

#### Activate Virtual Environment
``` source ./venv/bin/activate ```

#### Install Dependent Packages via Pip
``` pip install -r requirements.txt ```

#### Update Configs 
Go to `.dev` file in `env/` folder. Create one if not already present. You can copy one of the existing files and change the name and properties in place. 
Update the following properties
 + `DEBUG=True`
 + `DB_HOST=localhost`
 + `DB_NAME=koffee_local`
 + `DB_USERNAME=root`
 + `DB_PASS=root`
 + `DB_PORT=5432`
 + `SITE_URL = "localhost:8000"`
 + `ASYNC_EMAILS = False`

Comment out, all the other EMAIL_BACKEND, and just use the below one.
This will make sure that all emails are shown on the console, and not actually sent to someone's inbox. This will help in local dev and testing.

 + `EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"`

### If you are a developer
- Kindly note the below commande before perfoming the migrate command
``` python manage.py makemigrations ```

#### Run Migrations
``` python manage.py migrate ```

#### Update Permissions (Only the First time, or when new Permissions are added)
``` python manage.py refresh_permissions ```

#### Migrate to new Roles and Permissins Framework
``` python manage.py fix_roles ```

#### Run Server
``` python manage.py runserver ```

  Your server would start running on Go to [127.0.0.1:8000](127.0.0.1:8000) .

#### Disabling Asynchronous EMAILs and Making then Synchronous

During development RMQ is not required, and can be disabled by making `ASYNC_EMAILS = False` in .dev file

#### Working with RMQ and RMQ Worker

If you wish to see how RMQ workers are behaving, and have not set `ASYNC_EMAILS = False`, then you will be doing the following :

#### Building React

If you are working on React Components, then you will need to run a listener, that keeps on updating `bundle.js`, that houses the react app. 
We are working with a mixed setup, where both React APP and ServerSide rendered HTML/CSS/JS are being executed together. 
The following commands for installing and running auto-compiler for Javascript files. 

+ ``` npm install ```
+ ``` npx webpack --config webpack.config.js --mode=development ```
Keep the second command running, so that it listens to changes to JS files and automatically builds them.



