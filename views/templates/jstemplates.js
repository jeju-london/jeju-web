<script id="depth1Li" type="text/x-jsrender">
    <a href="#"><strong>{{:region}}</strong><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a>
</script>

<script id="regionMarker" type="text/x-jsrender">
    <div data-region="{{:name}}" data-xcoord="{{:centerCoord.x}}" data-ycoord="{{:centerCoord.y}}" class="wrap-marker" style="float:left">
        <span class="bs-glyphicons">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
        </span>
        <div class="maker-label" style="color:{{:fontColor}}"><span class="center">{{:name}}</span></div>

    </div>
    <a style="position:absolute;left:35px;top:27px;" href="#" data-region="{{:name}}" class="btn {{:btnClass}} btn-region" data-toggle="modal" data-target=".bs-example-modal-lg" role="button">자세히보기</a>
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