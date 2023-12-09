from django_hosts import patterns, host

host_patterns = patterns('',
    host(r'core', 'core.urls', name='core'),
    host(r'dashboard', 'dashboard.urls', name='dashboard'),
)