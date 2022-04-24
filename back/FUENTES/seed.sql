create database if not exists smartsoft;

create user if not exists userapp@'%' identified by 'password';
grant SELECT, INSERT, UPDATE on smartsoft.* to userapp@'%';
flush privileges;

use smartsoft;

create table tableType(
		id int auto_increment primary key,
        name varchar(30) not null
);

create table tableStructure(
	  id int auto_increment primary key,
      tableTypId int not null,
      header varchar(20) not null,
      dataType varchar(10) not null,
      format varchar(20) null,
      required bit not null,
      foreign key (tableTypId) references tableType(id),
      unique (tableTypId,header),
      check (dataType = "Date" || dataType = "Int" || dataType = "String")
);

create table tableData(
	id int auto_increment not null primary key,
	tableTypId int not null,
    idColumn int not null,
    cellValue nvarchar(8000) not null,
    foreign key (tableTypId) references tableType(id),
	foreign key (idColumn) references tableStructure(id)
);


insert into tableType (name)
	select 'Tabla 1'
    union 
    select 'Tabla 2'
    union 
    select 'Tabla 3';
  
 

insert into tableStructure (tableTypId,header,dataType,format,required)
values (1,'T1C1','Int',null,true),
	   (1,'T1C2','String',null,true),
       (1,'T1C3','Int',null,false),
       (1,'T1C4','Date','YYYY-MM-DD',false),
       (2,'T2C1','String',null,true),
       (2,'T2C2','String',null,false),
       (2,'T2C3','Int',null,false),
       (2,'T2C4','Date','YYYY-DD-MM HH:mm:ss',true),
       (2,'T2C5','Int',null,true),
       (3,'T3C1','Int',null,true),
       (3,'T3C2','String',null,true),
       (3,'T3C3','Date','HH:mm:ss',true);
       