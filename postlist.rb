#!/usr/bin/env ruby
# coding: utf-8

require 'yaml'


posts = Array.new
Dir.glob('posts/*.public.txt'){|f|
  posts << [f[/([0-9]{4}-[0-9]{2}-[0-9]{2})/,1],YAML.load_file(f)["title"],f.gsub(/public\.txt$/,'public.html')]
}
o = String.new
posts.sort {|a,b| b[0] <=> a[0]}.each do |p|
  o << "[#{p[1]} — #{p[0]}](#{p[2]})\n"
end

contents = File.read('index.edit.txt').sub(/~---posts---~/,o)


File.open('index.processed.txt', 'w') { |file| file.write(contents) }
