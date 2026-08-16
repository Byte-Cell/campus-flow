--
-- PostgreSQL database dump
--

\restrict 04wAieiYq6oebbxiGEf3zUA0ckzJvN8LqkQSD9E9WK3i7paDBhsrPIb87xaJtDH

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources (
    id integer NOT NULL,
    title text NOT NULL,
    category text NOT NULL,
    description text NOT NULL,
    audience jsonb DEFAULT '[]'::jsonb NOT NULL,
    url text DEFAULT ''::text NOT NULL,
    content jsonb DEFAULT '[]'::jsonb NOT NULL
);


--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.resources ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.resources_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict 04wAieiYq6oebbxiGEf3zUA0ckzJvN8LqkQSD9E9WK3i7paDBhsrPIb87xaJtDH

