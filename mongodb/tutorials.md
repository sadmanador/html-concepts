# Mongodb Command

## Access into mongosh cli
```bash
mongosh
```

## Show all dbs
```bash
show dbs
```

## Check replica set status
```bash
rs.status()
```

## Check all users
```bash
db.getUsers()
```

## Creating user and assigning roles
```bash
db.createUser({
  user: "user_name",
  pwd: "password",
  roles: [ { role: "readWrite", db: "db_name" } ]
})
```

## Below commands are for the general cli

## Mongodb db backup command
```bash
mongodump --db db_name --out file_path_name/ --username UserName --password Password --authenticationDatabase admin
```

## Mongodb db restore command
```bash
mongorestore --db db_name --username UserName --password Password --authenticationDatabase admin file_path_name/sample_db
```