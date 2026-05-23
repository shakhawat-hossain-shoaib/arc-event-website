# Work Distribution

## Project Goal

Make the backend ready.

Admin panel theke data add, edit, delete, and upload korle sheta database-e save hobe.

Public page and user panel database theke latest data show korbe.

## Team Structure

### Director

- Director: You
- Work: Final decision, priority, final approval

### Assistant Directors

- AD 1: Complex backend, security, database review
- AD 2: Complex upload system, QA, release check

### Developers

- 3 DE
- 4 SSE
- 3 SE

There will be 3 teams.

Each team will have 1 DE as team lead.

Each DE will also do development work, not only lead.

There will be no separate cross-team technical lead.

Cross-team coordination will be handled by the ADs.

## Team 1: Auth, Admin Security, and User Access

### Team Members

- Lead and Developer: DE 1
- SSE 1
- SE 1

### AD Support

- AD 1

### Main Feature

Secure admin access and user access.

### Work Items

#### DE 1

- Lead Team 1
- Build admin API protection helper
- Make sure all admin APIs check admin session
- Make sure only verified admin can access admin panel
- Review auth-related pull requests

#### SSE 1

- Update admin layout protection
- Check old session problem
- Make sure unverified admin cannot access admin pages
- Add proper redirect to login page

#### SE 1

- Test login flow
- Test normal user login
- Test admin login before verification
- Test admin login after verification
- Write simple test notes

### Done When

- Normal user cannot open admin panel
- Logged-out user cannot open admin panel
- Admin cannot open admin panel before email verification
- Verified admin can open admin panel
- Admin-only APIs are protected

## Team 2: Event Content Backend

### Team Members

- Lead and Developer: DE 2
- SSE 2
- SSE 3
- SE 2

### AD Support

- AD 1

### Main Feature

Admin can manage event data from admin panel.

This team will work on:

- Segments
- Schedule
- FAQ
- Sponsors

### Work Items

#### DE 2

- Lead Team 2
- Design API route structure
- Build Segment API
- Review Schedule, FAQ, and Sponsor APIs
- Make sure API response format is consistent

#### SSE 2

- Build Schedule API
- Add create schedule
- Add update schedule
- Add delete schedule
- Link schedule with segment when needed

#### SSE 3

- Build Sponsor API
- Add create sponsor
- Add update sponsor
- Add delete sponsor
- Support sponsor tier and display order

#### SE 2

- Build FAQ API
- Add create FAQ
- Add update FAQ
- Add delete FAQ
- Support FAQ display order

### Done When

- Admin can create, update, and delete segments
- Admin can create, update, and delete schedule items
- Admin can create, update, and delete FAQs
- Admin can create, update, and delete sponsors
- All data is saved in database
- APIs reject invalid data
- APIs reject non-admin users

## Team 3: Admin UI, Public Pages, and Upload

### Team Members

- Lead and Developer: DE 3
- SSE 4
- SE 3

### AD Support

- AD 2

### Main Feature

Connect admin panel with backend and show latest data on public/user pages.

This team will work on:

- Admin forms
- Public data loading
- Image upload
- User-facing display

### Work Items

#### DE 3

- Lead Team 3
- Connect admin segment page with Segment API
- Connect public segment page with database data
- Help upload integration
- Review UI and API integration

#### SSE 4

- Connect admin sponsor page with Sponsor API
- Add sponsor logo upload UI
- Connect public sponsor page with database data
- Show loading and error states

#### SE 3

- Connect admin FAQ page with FAQ API
- Connect admin schedule page with Schedule API
- Connect public FAQ page with database data
- Connect public schedule page with database data

### Done When

- Admin segment changes show on public segment page
- Admin sponsor changes show on public sponsor page
- Admin FAQ changes show on public FAQ page
- Admin schedule changes show on public schedule page
- Admin upload image shows on public page
- UI shows loading state
- UI shows error state

## Complex Work for ADs

## AD 1: Complex Backend and Security

### Work

- Review database schema
- Review admin API protection
- Review auth and session security
- Review Prisma queries
- Review validation rules
- Decide if any migration is needed
- Make sure secrets are not hardcoded

### Must Check

- `ADMIN_EMAIL` and `ADMIN_PASSWORD` only come from environment variables
- Normal users cannot call admin APIs
- Public APIs only expose safe data
- Delete APIs are protected
- Update APIs are protected

## AD 2: Upload System and Final QA

### Work

- Choose upload provider
- Recommended: Cloudinary or Vercel Blob
- Design upload flow
- Add file type rules
- Add file size rules
- Check uploaded image display
- Prepare final QA report

### Must Check

- Admin can upload image
- Image URL is saved in database
- Public page shows uploaded image
- Wrong file type is blocked
- Large file is blocked
- Upload secrets are not exposed in frontend

## Feature Priority

### Priority 1: Security

- Admin login
- Email verification
- Admin route protection
- Admin API protection

### Priority 2: Backend APIs

- Segment API
- Schedule API
- FAQ API
- Sponsor API

### Priority 3: Admin Panel

- Segment admin form
- Schedule admin form
- FAQ admin form
- Sponsor admin form

### Priority 4: Public Pages

- Public segment page from database
- Public schedule page from database
- Public FAQ page from database
- Public sponsor page from database

### Priority 5: Upload

- Upload provider setup
- Upload API
- Upload UI
- Public image display

## Simple API Rule

Every feature should follow this flow:

1. Admin UI sends request to API
2. API checks admin session
3. API validates data
4. API saves data in database
5. Public page reads latest data from database

## Team Communication Rule

- DE 1 owns security decisions
- DE 2 owns backend API decisions
- DE 3 owns frontend integration decisions
- AD 1 and AD 2 handle cross-team coordination
- AD 1 gives final approval for backend and security
- AD 2 gives final approval for upload and QA
- Director gives final approval for release

## Daily Update Format

Each team should report:

- What was done today
- What is blocked
- What will be done next
- Any help needed from AD or Director

## Final Acceptance Checklist

- Admin can log in
- Admin email verification works
- Unverified admin cannot open admin panel
- Normal user cannot open admin panel
- Admin can create segment
- Admin can edit segment
- Admin can delete segment
- Public segment page shows latest data
- Admin can create schedule
- Admin can edit schedule
- Admin can delete schedule
- Public schedule page shows latest data
- Admin can create FAQ
- Admin can edit FAQ
- Admin can delete FAQ
- Public FAQ page shows latest data
- Admin can create sponsor
- Admin can edit sponsor
- Admin can delete sponsor
- Public sponsor page shows latest data
- Admin can upload image
- Uploaded image shows on public page
- Production build passes
- Vercel deployment works
