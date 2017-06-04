<script id="depth1Li" type="text/x-jsrender">
    <a href="#"><strong>{{:region}}</strong><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a>
</script>

<script id="regionMarker" type="text/x-jsrender">
    <div data-region="{{:name}}" data-regioneng={{:nameEng}} data-xcoord="{{:centerCoord.x}}" data-ycoord="{{:centerCoord.y}}" class="region-marker wrap-marker" style="float:left" data-toggle="modal" data-target=".bs-example-modal-lg">
        <span class="bs-glyphicons">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
        </span>
        <div class="maker-label" style="color:{{:fontColor}}"><span class="center">{{:name}}</span></div>

    </div>
</script>

<script id="emdMarker" type="text/x-jsrender">
    <div data-region="{{:name}}" data-xcoord="{{:centerCoord.y}}" data-ycoord="{{:centerCoord.x}}" class="wrap-marker emd-wrap" style="float:left" data-toggle="modal" data-target=".bs-example-modal-lg">
        <span class="bs-glyphicons">
            <span class="glyphicon glyphicon-map-marker emd-marker" aria-hidden="true"></span>
        </span>
        <div class="maker-label emd-label" style="color:{{:fontColor}}"><span class="center">{{:name}}</span></div>

    </div>
</script>

<script id="graphModal" type="text/x-jsrender">
    <div class="modal-content">
        <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title">제주 {{:region}}</h4>
        </div>
        <div class="modal-body"><p>그래프 영역!!!!</p></div>
    </div>
</script>