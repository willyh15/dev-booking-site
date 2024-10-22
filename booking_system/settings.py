# settings.py

INSTALLED_APPS = [
    'appointments',
    # other Django apps...
]

# Static files settings
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Add templates folder
TEMPLATES = [
    {
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        # other template settings...
    }
]
