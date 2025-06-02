sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("project1.controller.TileList", {
      onInit: async function () {
        const oModel = this.getOwnerComponent().getModel();
        const orders = await oModel.bindList("/OrderDetails").requestContexts();
        const container = this.byId("tileContainer");
  
        orders.forEach(ctx => {
          const data = ctx.getObject();
          container.addItem(new sap.m.StandardTile({
            title: data.categoryName,
            info: data.productName,
            number: data.ID,
            press: () => {
              this.getOwnerComponent().getRouter().navTo("detail", {
                id: encodeURIComponent(data.ID)
              });
            }
          }));
        });
      }
    });
  });