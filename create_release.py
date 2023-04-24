import json, os, argparse, zipfile

# The name of the GitLab user/group that the repo is owned by, for the download URL
gitlab_group = 'JotaroSan'

# The individual files to include in the repo
include_files = ['module.json','n5econversion.mjs','LICENSE','n5econversion.css']

# The folders
include_folders = ['lang','templates','packs']

# -----------------------------------------------------------------------------
parser = argparse.ArgumentParser()
parser.add_argument('package_type', help="The package type, generally 'system' or 'module'")
parser.add_argument('release_tag', help="The version to specify in the manifest, generally the GitLab tag for the release")
args = parser.parse_args()

# Open the existing manifest file and determine the eventual zip name with it
manifest = json.load(open(f'{args.package_type}.json','r'))
zip_filename = f"{manifest['id']}-{args.release_tag}.zip"

# Write the version and download link to the manifest
manifest['version'] = str(args.release_tag)
#manifest['manifest'] = f"https://gitlab.com/{gitlab_group}/{manifest['id']}/-/releases/permalink/latest/downloads/{args.package_type}.json"
manifest['download'] = f"https://gitlab.com/{gitlab_group}/{manifest['id']}/-/releases/{args.release_tag}/downloads/{zip_filename}"
json.dump(manifest, open(f'{args.package_type}.json', 'w'), indent=2)


# Add of the specified files to the final zip that's being output
with zipfile.ZipFile(zip_filename, 'w') as zip_file:
    for filename in include_files:
        zip_file.write(filename)

    for folder_name in include_folders:
        for path,subfolders,files in os.walk(folder_name):
            for filename in files:
                zip_file.write(os.path.join(path,filename))