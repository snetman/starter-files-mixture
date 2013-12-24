project_path=File.expand_path("..",File.dirname(__FILE__))
# Compass configuration file.

# We also support plugins and frameworks, please read the docs http://docs.mixture.io/preprocessors#compass
# Require any additional compass plugins here.
require "/Users/snetman/.rvm/gems/ruby-1.9.3-p286/gems/breakpoint-2.0.7/lib/breakpoint.rb"
require "/Users/snetman/.rvm/gems/ruby-1.9.3-p286/gems/singularitygs-1.1.2/lib/singularitygs.rb"
# The singularity require above kept failing until I edited the path to breakpoint in the singularity.rb gemfile above
# See here for more info: http://support.mixture.io/discussions/problems/259-compass-cant-find-plugins#comment_26684642

# Important! change the paths below to match your project setup
css_dir = "public/styles" # update to the path of your css files.
sass_dir = "public/styles/sass" # update to the path of your sass files.
images_dir = "public/images" # update to the path of your image files.
javascripts_dir = "public/scripts" # update to the path of your script files.

line_comments = false # if debugging (or using Mixture chrome extension - set this to true)
cache = true
color_output = false # required for Mixture