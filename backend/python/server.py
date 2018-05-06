#server.py

#da real backend
#satori channels needed


import dbserver.py

global p_name
global patientdata

def pullpatientdata(p_name):
	#this is where patient data is taken from. 
	patientdata = getparts(p_name)

	return patientdata


def risks(p_name):
	patient = pullpatientdata(p_name)


def data_create(url):
	#fill in the ml.



