#!/usr/bin/env ruby

source_dir = File.expand_path(File.dirname(__FILE__) + "/dist")
target_dir = File.expand_path("~/Projects/badwrong/badwrong.dev")

puts "Deploying from #{source_dir} to #{target_dir}"

puts "👷 Building..."
puts(`cd #{source_dir} && npm run build`)

puts "\n📑 Copying..."
puts(`rsync -av --delete --exclude .git --exclude .gitignore --exclude .idea  #{source_dir}/ #{target_dir}/`)

puts "\n🫣 Committing..."
puts(`cd #{target_dir} && git add -A . && git commit -m "Deployed at #{Time.now}"`)
puts(`cd #{target_dir} && git push origin main`)

puts "🚀 Done!"
puts "🔗 https://badwrong.dev"

