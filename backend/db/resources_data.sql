--
-- PostgreSQL database dump
--

\restrict dthOdz4I3PTfPMjqnqhGMhx6q0umdKdH2xJVRwjWvupaFV0zcvvXQNUyogKtS2k

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resources (id, title, category, description, audience, url, content) FROM stdin;
1	Password Reset Guide	IT Services	Instructions for resetting university account passwords and recovering access.	["Students", "Faculty", "Staff"]	/password-reset	["Visit the university account portal.", "Select the Forgot Password option.", "Verify your identity using the required information.", "Create and confirm your new password."]
2	Library Database Access	Library	Access online library databases, journals, and academic research resources.	["Students", "Faculty"]	/library-access	["Visit the university library website.", "Sign in using your university credentials.", "Select the database, journal, or research resource you need.", "Contact the library for assistance if you have trouble accessing a resource."]
3	Campus Tour Information	Admissions	Information about campus tours, visitor services, and admissions resources.	["Visitors"]	/campus-guide	["Review the available campus tour dates and times.", "Register for a tour through the admissions office.", "Arrive at the designated visitor check-in location before your tour.", "Contact admissions if you need assistance with scheduling or accessibility."]
4	Academic Advising Resources	Academic Resources	Guidance and support resources for academic planning and student success.	["Students"]	/academic-advising	["Review your current academic requirements and degree plan.", "Schedule an appointment with your academic advisor.", "Prepare questions about courses, degree requirements, and academic goals.", "Follow up with your advisor if additional academic support is needed."]
5	Employee Software Request Form	IT Services	Submit requests for approved software and technology needed for university work.	["Faculty", "Staff"]	/employee-request	["Review the software you need for your university work.", "Confirm that the software is approved for university use.", "Submit the software request form with the required information.", "Wait for the request to be reviewed and approved before installing the software."]
6	Student Parking Information	Campus Services	Information about parking permits, regulations, and available campus parking.	["Students"]	/student-parking	["Review campus parking regulations and permit requirements.", "Apply for a student parking permit if one is required.", "Park only in areas designated for your permit.", "Review campus parking maps and restrictions before parking."]
\.


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.resources_id_seq', 7, true);


--
-- PostgreSQL database dump complete
--

\unrestrict dthOdz4I3PTfPMjqnqhGMhx6q0umdKdH2xJVRwjWvupaFV0zcvvXQNUyogKtS2k

