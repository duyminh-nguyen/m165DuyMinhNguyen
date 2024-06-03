# M165

## A
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN01/mongodb.png)
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN01/nano.png)

### auth

Explicitly indicates that authentication should be carried out using the "admin" database. MongoDB will search for the authentication credentials (username "admin", password "admin") within this "admin" database.

If authSource=admin is not specified, MongoDB will default to its standard authentication database, which may not be "admin" in this context. This could cause authentication errors if the credentials are not located in the default database.

### Sed
The following sed commands modify the MongoDB configuration file to enable authorization and change the bind IP address.

sudo sed -i 's/#security:/security:\n authorization: enabled/g' /etc/mongod.conf

This command searches for the line that contains #security: and replaces it with two lines: security: and authorization: enabled.

sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf

This command changes the bind IP address in the configuration file from 127.0.0.1 (localhost) to 0.0.0.0, allowing MongoDB to accept connections from any IP address.

In summary, these commands adjust the MongoDB configuration to enable user authorization and allow connections from any IP address.

## B 
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN01/jsonmongo1.png)
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN01/jsonmongo.png)

The date is set by placing a $date before the value.

## C
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN01/commands%20mongosh.png)
![alt text](https://github.com/duyminh-nguyen/m165DuyMinhNguyen/blob/main/KN01/commandscmdmongosh.png)

Commands 1 and 2 both display the databases.

3 switches to the specified database.

4 lists all collections in the current database.

5 lists all collections again, despite requesting tables, since in MongoDB, collections are the equivalent of tables.
