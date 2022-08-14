/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: baseUrl.js
 *
 * Copyright (c) 2022 Bujisoft
 */


const baseUrl = process.env.NODE_ENV === "production" 
? 'https://jacquelinetaylorandfriends.org' 
: 'http://localhost:3000';

export default baseUrl;