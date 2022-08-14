# CHANGELOG
THIS CHANGELOG CONTAINS INFORMATION ON CHANGES MADE FROM INCEPTION OF WEBSITE

## MOVE WEBSITE FROM CDN TO FIRBASE
1. Create firebase account
2. Enable hosting 
3. Enable feature branching for rolling out changes

### Issues
1. Hosting account will not update with yaml script per documentation

### Resolution
1. Use degit to clone site into Jacqueline Taylor & Friends Repo
2. Remove all dependecies hidden from vercel which inhibit script from working proerly
3. Run Test 
4. Test feature by changing color of text ~ yellow in css to match theme color of purple