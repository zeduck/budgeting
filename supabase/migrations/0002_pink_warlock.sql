-- Custom SQL migration file, put you code below! --

create policy "create user account"
on "public"."accounts"
as PERMISSIVE
for INSERT
to authenticated
with check (
  requesting_user_id() = user_id
);
