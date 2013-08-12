<h1>{{name}}</h1>

<a class="btn-save" href="">save</a>
<a href="/">back</a>

<div>{{#with treatments}}
    <div>{{#with ace-inhibitors}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>

    <div>{{#with angiotensin-ii-receptor-blockers}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>

    <div>{{#with bile-acid-resins}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>

    <div>{{#with calcium-channel-blockers}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>
    
    <div>{{#with diuretics-water-pills}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>

    <div>{{#with fibrates}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>


    <div>{{#with statins}}
      <h2>{{display_name}}</h2>
      {{{description}}}
    {{/with}}</div>
{{/with}}</div>