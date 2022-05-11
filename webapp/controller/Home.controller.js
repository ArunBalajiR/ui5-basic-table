sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller,MessageBox,MessageToast) {
	"use strict";

	return Controller.extend("FirstApp.controller.Home", {
		
		onInit: function(){
			var arr = [];
			var oTableId = this.getView().byId("empdetails");
			var oModel = new sap.ui.model.json.JSONModel();
			
			oModel.setData(arr);
			oTableId.setModel(oModel);
		},
		
		onSave: function() {
			
			var empId = this.getView().byId("empId").getValue();
			var empName = this.getView().byId("empName").getValue();
			var empPos = this.getView().byId("empPos").getValue();
			var empDoj = this.getView().byId("empDoj").getValue();
			var empSal = this.getView().byId("empSal").getValue();
			
			

			if (empId !== "" || empName !== "" || empPos !== "" || empDoj !== "" || empSal !== "") {
				
				// getting empty json model we declared in init
				var oTab = this.getView().byId("empdetails").getModel().getProperty("/");
				
				var dataToBePushed = [{
					"empId": empId,
					"empName": empName,
					"empPos": empPos,
					"empDoj": empDoj,
					"empSal": empSal
				}];

				//pusing above data to our empty model
				oTab.push(dataToBePushed[0]);
				
				//setting empty model with uploaded field model(setting it in ui)
				this.getView().byId("empdetails").getModel().setProperty("/", oTab);

				MessageToast.show("Emloyee ID " + empId + " Details Saved");

				//after pushing clearing values in fields
				this.getView().byId("empId").setValue("");
				this.getView().byId("empName").setValue("");
				this.getView().byId("empPos").setValue("");
				this.getView().byId("empDoj").setValue("");
				this.getView().byId("empSal").setValue("");

			} else {
				//MessageBox.alert("Please fill all the fields");
				MessageBox.information("Please fill all the fields");
			}

		},

		onClear: function() {
			this.getView().byId("empId").setValue("");
			this.getView().byId("empName").setValue("");
			this.getView().byId("empPos").setValue("");
			this.getView().byId("empDoj").setValue("");
			this.getView().byId("empSal").setValue("");
		}

	});
});