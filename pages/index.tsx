import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Parse from 'parse/dist/parse.min.js';
import { PersonComponent } from '../components/PersonComponent';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'fbjjCxLcl34ggsyWs68ZceJKEQFCI8U5PlNprENC';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'rOnD5y08hIeUzcMQseAtoBL9mXxmnGWB7kbq0OYF';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export default function Home() {
  return (
    <div>
      <PersonComponent />
    </div>
  )
}
