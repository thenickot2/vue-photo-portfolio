find app/img -name "*.jpg" -type f -exec jpegtran -copy none -optimize -perfect -outfile {} {} \;
