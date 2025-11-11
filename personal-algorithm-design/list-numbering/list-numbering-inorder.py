import os

filename = input("Enter the name of your text file (e.g., problems.txt): ").strip()

if not os.path.exists(filename):
    print(f"⚠️ Error: The file '{filename}' was not found. Please make sure it exists in this folder :(")
else:
    with open(filename, "r", encoding="utf-8") as infile:
        problems = [line.strip() for line in infile if line.strip()]

    if not problems:
        print("⚠️ The file is empty - please add some problem links or names inside it")

    else:
        with open("numbered_lists.txt", "w", encoding="utf-8") as outfile:
            for i, problem in enumerate(problems, start=1):
                outfile.write(f"{i}. {problem}\n")
        print("✅ Success! Numbered list saved to 'numbered_lists.txt'.")
