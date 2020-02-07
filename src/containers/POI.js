/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import { Card, Media } from 'react-bootstrap'
import {MediaBody} from 'react-bootstrap/Media';
import { GiKnifeFork } from 'react-icons/gi';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Redirect } from 'react-router'
import { useHistory} from 'react-router';

export const POI = () => {

 const history = useHistory()

  return (
    <>
    <Card style={{marginTop: '10px', cellPadding: '0px', cellSpacing: '0px', minHeight: '10px'}}>
      <Media style={{marginLeft: '8px', marginRight: '0px', minHeight: '40px', marginTop: '12px', alignContent: 'center'}}
      onClick={() => history.push('/places/123') } >
        <GiKnifeFork size={"2em"} />

        <Media.Body style={{marginLeft: '10px'}}>
          <h6 className={"tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold"}  style={{marginBottom: '0px'}}>Beautiful kitchen</h6>
            <div className={"mg-b-0 tx-12 tx-color-03"} a={""}>2.0 <Rater total={5} rating={2} interactive={false}/> (15 reviews)</div>
        </Media.Body>
      </Media>


    </Card>
      </>
  )
}