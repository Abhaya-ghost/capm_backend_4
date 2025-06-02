sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ], function (Controller, MessageToast) {
    "use strict";
  
    return Controller.extend("my.sales.ui5.controller.Main", {
      onInit: function () {},
  
    //   onCategoryChange: function (oEvent) {
    //     const selectedCategory = oEvent.getSource().getSelectedKey();
    //     const productSelect = this.byId("productSelect");
  
    //     const binding = productSelect.getBinding("items");
    //     const filter = new sap.ui.model.Filter("category_ID", "EQ", selectedCategory);
    //     binding.filter([filter]);
    //   },

    onNavigateToHistory: function () {
        this.getOwnerComponent().getRouter().navTo("tilelist");
      },
  
      onSubmit: function () {
        const view = this.getView();
        const oModel = view.getModel();
  
        const data = {
          customerName: view.byId("customerName").getValue(),
          customerEmail: view.byId("customerEmail").getValue(),
          customerNo: parseInt(view.byId("customerNo").getValue(), 10),
          categoryName: view.byId("categorySelect").getSelectedItem().getText(),
          productName: view.byId("productSelect").getSelectedItem().getText(),
          supplier_ID: view.byId("supplierSelect").getSelectedKey(),
          regionName: view.byId("regionSelect").getSelectedItem().getText(),
          createdAt: new Date().toISOString()
        };

        // if (!categoryName || !productName || !supplier_ID || !regionName || !customerName || !customerEmail || isNaN(customerNo)) {
        //     MessageToast.show("Please fill all required fields.");
        //     return;
        // }
  
        oModel.bindList("/OrderDetails").create(data);
        MessageToast.show("Order Created!");
        this.getOwnerComponent().getRouter().navTo("tilelist");
      }
    });
  });
  