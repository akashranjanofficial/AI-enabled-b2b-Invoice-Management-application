package com.api;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

import com.database.Admin;
import com.model.InvoiceManagementModel;

@WebServlet("/update")
public class DataUpdationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Admin admin;
    public DataUpdationServlet() {
        super();
    }
 
    public void init() {
        String jdbcURL = "jdbc:mysql://localhost:3306/grey_goose";
        String jdbcUsername = "root";
        String jdbcPassword = "shreya";
 
        admin = new Admin(jdbcURL, jdbcUsername, jdbcPassword);
 
    }
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        try {
            updateRow(request,response);
        } catch (SQLException ex) {
            throw new ServletException(ex);
        }
    }
       
    private void updateRow(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        int id = Integer.parseInt(request.getParameter("sl_no"));
        String invoice_currency=request.getParameter("invoice_currency");
        String cust_payment_terms=request.getParameter("cust_payment_terms");
        System.out.println(invoice_currency+"    "+cust_payment_terms);
 
        InvoiceManagementModel row = new InvoiceManagementModel(id);
        row.setInvoice_currency(invoice_currency);
        row.setCust_payment_terms(cust_payment_terms);
        try {
			int i=admin.updateRow(row);
			System.out.println(i);
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
    }

}
