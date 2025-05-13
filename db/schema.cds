namespace my.sales;

entity Category {
  key ID : Integer;
  name   : String;
}

entity Product {
  key ID : Integer;
  name   : String;
  category : Association to Category;
}

entity Supplier {
  key ID : Integer;
  name   : String;
  location : String;
}

entity Region {
  key ID : Integer;
  name   : String;
}

entity OrderDetails {
  key ID : UUID;
  customerName : String;
  customerEmail : String;
  customerNo : Integer64;
  categoryName : String;
  productName  : String;
  supplier : Association to Supplier;
  regionName   : String;
  createdAt : Timestamp;
}