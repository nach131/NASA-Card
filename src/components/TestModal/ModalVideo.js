import React from 'react'


class ModalVideo extends React.Component {
  // state = {  }
  render() {
    return (
      // <!-- Button trigger modal-->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalYT">Launch modal</button>

      // <!--Modal: modalYT-->
      <div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">

          {/* <!--Content--> */}
          <div class="modal-content">

            {/* <!--Body--> */}
            <div class="modal-body mb-0 p-0">

              <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  allowfullscreen></iframe>
              </div>

            </div>

            {/* <!--Footer--> */}
            <div class="modal-footer justify-content-center flex-column flex-md-row">
              <span class="mr-4">Spread the word!</span>
              <div>
                <a type="button" class="btn-floating btn-sm btn-fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
                {/* <!--Twitter--> */}
                <a type="button" class="btn-floating btn-sm btn-tw">
                  <i class="fab fa-twitter"></i>
                </a>
                {/* <!--Google +--> */}
                <a type="button" class="btn-floating btn-sm btn-gplus">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                {/* <!--Linkedin--> */}
                <a type="button" class="btn-floating btn-sm btn-ins">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4"
                data-dismiss="modal">Close</button>

            </div>

          </div>
          {/* <!--/.Content--> */}

        </div>
      </div>
      // <!--Modal: modalYT-- >
  
  


  
  )
  }
}

export default ModalVideo;