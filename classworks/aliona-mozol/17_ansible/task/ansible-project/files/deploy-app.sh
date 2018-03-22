#!/bin/sh
ansible-playbook ./deploy-app.yml -i ./hosts/local -u root -e "env=staging"
