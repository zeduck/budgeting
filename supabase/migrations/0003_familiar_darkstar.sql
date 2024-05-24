-- Custom SQL migration file, put you code below! --

create policy "select user account"
on "public"."accounts"
as PERMISSIVE
for SELECT
to authenticated
using (
  requesting_user_id() = user_id
);
