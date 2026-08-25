---
layout: page
permalink: /events/
title: Events
description: Upcoming Tulane Math Club events.
nav: true
nav_order: 3
---

{%- comment -%}
Events come from _data/events.yml. Nothing on this page needs editing to add one.

Dates are compared as Unix timestamps (`| date: '%s' | plus: 0` forces a number; a plain
string compare would order "9" after "10"). An event stays under "Upcoming" through the
whole of its day, hence the +86399 on the cutoff.
{%- endcomment -%}

{%- assign now = site.time | date: '%s' | plus: 0 -%}
{%- assign sorted = site.data.events | sort: 'date' -%}

{%- assign upcoming = '' | split: '' -%}
{%- assign past = '' | split: '' -%}
{%- for event in sorted -%}
  {%- assign stamp = event.date | date: '%s' | plus: 86399 -%}
  {%- if stamp >= now -%}
    {%- assign upcoming = upcoming | push: event -%}
  {%- else -%}
    {%- assign past = past | push: event -%}
  {%- endif -%}
{%- endfor -%}

{% if upcoming.size == 0 %}

No events are scheduled right now. Announcements go out by email from
<a href="mailto:enaig@tulane.edu">enaig@tulane.edu</a>.

{% else %}

Announcements and any last-minute changes go out by email from
<a href="mailto:enaig@tulane.edu">enaig@tulane.edu</a>.

{% for event in upcoming %}

## {{ event.title }}

**{{ event.date | date: '%A, %B %-d, %Y' }}**{% if event.time %} at {{ event.time }}{% endif %}{% if event.location %}, {{ event.location }}{% endif %}

{% unless event.time and event.location %}*Time and location to be announced.*{% endunless %}

{{ event.description | markdownify }}

{% if event.details %}[Details]({{ event.details | relative_url }}){% if event.rsvp %} &middot; {% endif %}{% endif %}{% if event.rsvp %}[RSVP on WaveSync]({{ event.rsvp }}){% endif %}

{% endfor %}
{% endif %}

{% if past.size > 0 %}

---

## Past events

{% assign recent = past | reverse %}
{% for event in recent %}

- **{{ event.title }}**, {{ event.date | date: '%B %-d, %Y' }}
  {%- if event.description %}<br>{{ event.description | strip_newlines | truncate: 160 }}{% endif %}

{% endfor %}
{% endif %}
