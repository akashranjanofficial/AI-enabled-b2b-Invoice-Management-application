package com.model;

import java.util.*;

//data that comes from the  frontend is set into object first using setter and then getter is used to access them
public class InvoiceManagementModel {
	private String business_code;
	private int cust_number;
	private Date clear_date;
	private int buisness_year;
	private String name_customer;
	private String doc_id;
	private Date posting_date;
	private Date document_create_date;
	private Date document_create_date1;
	private Date due_in_date;
	private String invoice_currency;
	private String document_type;
	private int posting_id;
	private String area_business;
	private Double total_open_amount;
	private Date baseline_create_date;
	private String cust_payment_terms;
	private int invoice_id;
	private int isOpen;
	private String aging_bucket;
	private int is_deleted;
	private int sl_no;
	
	public InvoiceManagementModel() {
		
	}
	
    public InvoiceManagementModel(int sl_no) {
		this.sl_no = sl_no;
	}
    //use getter and setter instead of consturtor
    public InvoiceManagementModel(String business_code,int cust_number,Date clear_date,int buisness_year,String doc_id,Date posting_date,Date document_create_date,Date document_create_date1,Date due_in_date,String invoice_currency,String document_type,int posting_id,String area_business,Double total_open_amount,Date baseline_create_date,String cust_payment_terms,int invoice_id/**String aging_bucket,int isOpen,int is_deleted**/) {
		this.business_code=business_code;
		this.cust_number=cust_number;
		this.clear_date=clear_date;
		this.buisness_year=buisness_year;
		this.doc_id=doc_id;
		this.posting_date=posting_date;
		this.document_create_date=document_create_date;
		this.document_create_date1=document_create_date1;
		this.due_in_date=due_in_date;
		this.invoice_currency=invoice_currency;
		this.area_business=area_business;
		this.total_open_amount=total_open_amount;
		this.baseline_create_date=baseline_create_date;
		this.posting_id=posting_id;
		this.document_type=document_type;
		this.invoice_id=invoice_id;
		this.cust_payment_terms=cust_payment_terms;
		

	}
    
    public String getAging_bucket() {
		return aging_bucket;
	}

	public void setAging_bucket(String aging_bucket) {
		this.aging_bucket = aging_bucket;
	}

	public int getSl_no() {
    	return this.sl_no;
    }
    
    public void setSl_no(int sl_no) {
		this.sl_no = sl_no;
	}
    
	public String getBusiness_code() {
		return this.business_code;
	}
	
	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}
	
	public int getCust_number() {
		return this.cust_number;
	}
	
	public void setCust_number(int cust_number) {
		this.cust_number = cust_number;
	}
		
	public Date getClear_date() {
		return this.clear_date;
	}
	
	public void setClear_date(Date clear_date) {
		this.clear_date = clear_date;
	}
	
	public int getBuisness_year() {
		return this.buisness_year;
	}
	
	public void setBuisness_year(int buisness_year) {
		this.buisness_year = buisness_year;
	}
	
	public String getDoc_id() {
		return this.doc_id;
	}
	
	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}
	
	public Date getPosting_date() {
		return this.posting_date;
	}
	
	public void setPosting_date(Date posting_date) {
		this.posting_date = posting_date;
	}
	public String getName_customer() {
		return name_customer;
	}

	public void setName_customer(String name_customer) {
		this.name_customer = name_customer;
	}
	public Date getDocument_create_date() {
		return this.document_create_date;
	}
	
	public void setDocument_create_date(Date document_create_date) {
		this.document_create_date = document_create_date;
	}
	
	public Date getDocument_create_date1() {
		return this.document_create_date1;
	}
	
	public void setDocument_create_date1(Date document_create_date1) {
		this.document_create_date1 = document_create_date1;
	}
	
	public Date getDue_in_date() {
		return this.due_in_date;
	}
	
	public void setDue_in_date(Date due_in_date) {
		this.due_in_date = due_in_date;
	}
	
	public String getInvoice_currency() {
		return this.invoice_currency;
	}
	
	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	
	public String getDocument_type() {
		return this.document_type;
	}
	
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	
	public int getPosting_id() {
		return this.posting_id;
	}
	
	public void setPosting_id(int posting_id) {
		this.posting_id = posting_id;
	}
	
	public String getArea_business() {
		return this.area_business;
	}
	
	public void setArea_business(String area_business) {
		this.area_business = area_business;
	}
	
	public Double getTotal_open_amount() {
		return this.total_open_amount;
	}
	
	public void setTotal_open_amount(Double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	
	public Date getBaseline_create_date() {
		return this.baseline_create_date;
	}
	
	public void setBaseline_create_date(Date baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}
	
	public String getCust_payment_terms() {
		return this.cust_payment_terms;
	}
	
	public void setCust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
	
	public int getInvoice_id() {
		return this.invoice_id;
	}
	
	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	
	public int getIsOpen() {
		return this.isOpen;
	}
	
	public void setIsOpen(int isOpen) {
		this.isOpen = isOpen;
	}
	
	public String getAging_Bucket() {
		return this.aging_bucket;
	}
	
	public void setAging_Bucket(String aging_bucket) {
		this.aging_bucket = aging_bucket;
	}
	
	public int getIs_deleted() {
		return this.is_deleted;
	}
	
	public void setIs_deleted(int is_deleted) {
		this.is_deleted = is_deleted;
	}
}