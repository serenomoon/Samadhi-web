# Generated by Django 4.0.5 on 2022-06-22 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samadhiapp', '0002_alter_clases_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facilitadores',
            name='clase',
            field=models.ManyToManyField(blank=True, related_name='clases_list', to='samadhiapp.clases'),
        ),
    ]