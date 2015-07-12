<?php

echo file_get_contents(sprintf('http://wandelnet.nl/routes/autosuggest/%s', $_GET['keyword']));