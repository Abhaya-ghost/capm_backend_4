using my.sales as my from '../db/schema';

service OrderService {
  entity Categories as projection on my.Category;
  entity Products as projection on my.Product;
  entity Suppliers as projection on my.Supplier;
  entity Regions as projection on my.Region;
  entity OrderDetails as projection on my.OrderDetails;
}