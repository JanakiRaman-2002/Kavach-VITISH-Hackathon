# Kavach-VITISH-Hackathon
24 hr Hackathon VITISH
#Problem Statement:-
##Advanced CCTV analytics solution
Design and develop a technological solution based on live CCTV feeds, that can automatically detect incidents related to street crime, violence, burglary, theft, infiltration, unauthorized access etc. and generate alerts to the nearest Police Station. The solution should also be able to generate a report and maintain a database that includes the nature of incident/crime, location, time, level of alert (i.e., low, medium, high risk alert) etc.
#Our Solution:-
##Our Models:-
Movinet Based Model to detect Crime & Classify its severity 
Siamese Network Model to detect faces of known criminals and track them over a region
DEFT Model to track offenders over a dynamic region over multiple CCTVs
A combination of Outputs from the models are used to track the offenders effictively
Feedback based model re-trainning
##Our System:
If a crime is detected by the MoviNet Model, and if the approval is given by control room
The perpatrator is tracked over various CCTVs around the area using DEFT model
If a previous offender is recognized by the Siamese Network Model , the CCTVs shift focus to the offender 
On approval from control room alert is sent to the closest police officer in the vicinity of the camera & reports are stored in the Database
